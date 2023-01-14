#version 300 es
precision highp float;
vec3 col4[4] = vec3[](
  vec3(1., 0., 0.),
  vec3(0., 1., 0.),
  vec3(0., 0., 1.),
  vec3(1., 1., 0.)
);

out vec4 fragColor;

void main(){
  fragColor = vec4(col4[0], 1.0);
}