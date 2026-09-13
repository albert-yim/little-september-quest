// Decode PNGs without image-library dependencies; verify real alpha and safe edges.
const fs = require('node:fs');
const zlib = require('node:zlib');
const assert = require('node:assert/strict');
const names = ['piyak-neutral','piyak-excited','piyak-love','nyong-neutral','nyong-excited','nyong-love','nyong-nervous','nyong-gift'];
for (const name of names) {
  const png = fs.readFileSync(`assets/characters/${name}.png`);
  const width = png.readUInt32BE(16), height = png.readUInt32BE(20);
  assert.equal(png[24], 8, `${name}: expected 8-bit PNG`);
  assert.equal(png[25], 6, `${name}: must have RGBA, not a painted checkerboard`);
  assert.equal(png[28], 0, `${name}: expected non-interlaced PNG`);
  const chunks = [];
  for (let p=8;p<png.length;) {
    const length=png.readUInt32BE(p);
    if(png.toString('ascii',p+4,p+8)==='IDAT') chunks.push(png.subarray(p+8,p+8+length));
    p+=length+12;
  }
  const raw=zlib.inflateSync(Buffer.concat(chunks)), stride=width*4;
  let previous=Buffer.alloc(stride), offset=0, pixels=0;
  const bounds=[width,height,-1,-1];
  for(let y=0;y<height;y++) {
    const filter=raw[offset++], row=Buffer.alloc(stride);
    for(let x=0;x<stride;x++) {
      const a=x>=4?row[x-4]:0,b=previous[x],c=x>=4?previous[x-4]:0;
      const p=a+b-c, pa=Math.abs(p-a),pb=Math.abs(p-b),pc=Math.abs(p-c);
      const prediction=[0,a,b,Math.floor((a+b)/2),pa<=pb&&pa<=pc?a:pb<=pc?b:c][filter];
      assert.notEqual(prediction,undefined);
      row[x]=(raw[offset++]+prediction)&255;
      if(x%4===3 && row[x]>24) {
        const px=(x-3)/4; pixels++;
        bounds[0]=Math.min(bounds[0],px);bounds[1]=Math.min(bounds[1],y);
        bounds[2]=Math.max(bounds[2],px);bounds[3]=Math.max(bounds[3],y);
      }
    }
    previous=row;
  }
  const margins=[bounds[0]/width,bounds[1]/height,(width-1-bounds[2])/width,(height-1-bounds[3])/height];
  assert.ok(pixels>width*height*.1,`${name}: empty sprite`);
  assert.ok(pixels<width*height*.8,`${name}: background not transparent`);
  assert.ok(margins.every(m=>m>.04),`${name}: subject touches edge (${margins})`);
  console.log(`${name}: real alpha, full silhouette, minimum margin ${Math.round(Math.min(...margins)*100)}%`);
}
