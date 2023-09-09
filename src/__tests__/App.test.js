test("Test passing", () => {
  return new Promise((resolve, reject) => {
    resolve(true);
    reject("Test failed");
  }).then((result) => {
    expect(result).toBe(true); 
  }).catch((error) => {
    expect(error).toBeUndefined();
  });
});
