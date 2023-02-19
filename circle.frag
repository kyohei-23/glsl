#version 300 es
precision highp float;

uniform vec2 u_resolution;
in vec4 v_position;
out vec4 outColor;

void main(){
  vec2 uv = (gl_FragCoord.xy * 2. - u_resolution) / u_resolution.xy;
  outColor = vec4(vec3(step(length(uv), .5)), 1);
}

/**
メモ
length関数はvec2(0.0)からの距離をfloatで返す関数
step関数は第一引数に比較したい値、第二引数に閾値を受け取り、値が閾値以下なら1を返し閾値以上なら0を返す関数
*/