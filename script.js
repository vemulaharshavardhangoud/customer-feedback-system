// ---------- Local Storage Helpers ----------
function getData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ---------- Products ----------
function addProduct(pname, pdesc, price, img) {
  let products = getData("products");
  let pid = Date.now();
  products.push({ pid, pname, pdesc, price, img });
  saveData("products", products);
}

function deleteProduct(pid) {
  let products = getData("products").filter(p => p.pid !== pid);
  saveData("products", products);
}

// ---------- Customers ----------
function addCustomer(fname, lname, email, phone) {
  let customers = getData("customers");
  let cid = Date.now();
  customers.push({ cid, fname, lname, email, phone });
  saveData("customers", customers);
}

function deleteCustomer(cid) {
  let customers = getData("customers").filter(c => c.cid !== cid);
  saveData("customers", customers);
}

// ---------- Feedback ----------
function addFeedback(pid, cid, rate, comment) {
  let feedbacks = getData("feedbacks");
  let fid = Date.now();
  feedbacks.push({ fid, pid, cid, rate, comment });
  saveData("feedbacks", feedbacks);
}

function deleteFeedback(fid) {
  let feedbacks = getData("feedbacks").filter(f => f.fid !== fid);
  saveData("feedbacks", feedbacks);
}
