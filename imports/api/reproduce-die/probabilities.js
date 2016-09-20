export const probReproduceDie = {
  reproduce: function(scale, age) {
    return 0.01 * scale * Math.exp((100-age)/100);
  },

  die: function(scale, age) {
    return 0.01 * scale * Math.exp(age/100);
  },
};
