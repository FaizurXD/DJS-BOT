const filesToRequire = ['./pinger247.js', './otherFile.js', './anotherFile.js'];

filesToRequire.forEach(file => {
    require(file);
});

console.log("All of your required JS files are started.");
