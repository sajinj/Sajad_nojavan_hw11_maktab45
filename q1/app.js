function fullName(fname, lname, f) {
    let fullName = fname + " " + lname;
   f(fullName);
}

fullName("sajad", "nojavan", function (fn) {
  console.log(fn);  
})