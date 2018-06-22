'use strict';

const W = [0, 1];
const num_of_ways = (N, S) => {
  if (W[N] != undefined) {
  	return W[N];
  }

  let sum = 0;
  S.forEach((s) => {
    if (N - s >= 0) {
      sum += (W[N - s] ? W[N - s] : num_of_ways(N-s, S))
    }
  });
  W.push(sum);
  return W[N];
};

/*
 * N = number of stairs
 * S = number of steps possible
 */
const N = 5;
const S = [1, 3, 5];

const w = num_of_ways(N, S);
console.log(w);
