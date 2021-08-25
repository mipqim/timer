const args = process.argv;

const timer = function(args) {

  for (let i = 2; i < args.length; i++) {
    if (!isNaN(args[i]) && args[i] >= 0)
      setTimeout(() => {process.stdout.write('\x07');}, 1000 * args[i]);
  }
}

timer(args);