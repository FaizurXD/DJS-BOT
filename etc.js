const filesToRequire = ['./pinger247.js', './alive.js', './animation.js'];

filesToRequire.forEach(file => {
    require(file);
});

console.log("All of your required JS files are started.");
