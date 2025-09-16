// ------------------- Local Storage Helpers -------------------
function getData(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (e) {
    console.error(`Error parsing data from localStorage for key: ${key}`, e);
    return [];
  }
}

function saveData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error(`Error saving data to localStorage for key: ${key}`, e);
  }
}// ------------------- Local Storage Helpers -------------------
function getData(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (e) {
    console.error(`Error parsing data from localStorage for key: ${key}`, e);
    return [];
  }
}

function saveData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error(`Error saving data to localStorage for key: ${key}`, e);
  }
}

// ------------------- Preload Demo Data -------------------
function preloadData() {
  if (!localStorage.getItem("products")) {
    const products = [
      { pid: 1, pname: "Wireless Headphones", pdesc: "Noise-cancelling Bluetooth headphones", price: 2499.99, img: "https://via.placeholder.com/150" },
      { pid: 2, pname: "Smartphone X12", pdesc: "6.5-inch AMOLED, 128GB storage, 48MP camera", price: 32999, img: "https://via.placeholder.com/150" },
      { pid: 3, pname: "Gaming Laptop", pdesc: "RTX 4060 GPU, 16GB RAM, 512GB SSD", price: 84999, img: "https://via.placeholder.com/150" },
      { pid: 4, pname: "Bluetooth Speaker", pdesc: "Portable waterproof speaker with deep bass", price: 4999, img: "https://via.placeholder.com/150" },
      { pid: 5, pname: "Smart Watch", pdesc: "Fitness tracking with heart rate & GPS", price: 7999, img: "https://via.placeholder.com/150" },
      { pid: 6, pname: "DSLR Camera", pdesc: "24MP DSLR with dual-lens kit", price: 55999, img: "https://via.placeholder.com/150" },
      { pid: 7, pname: "LED TV 55\"", pdesc: "4K Ultra HD Smart TV", price: 42999, img: "https://via.placeholder.com/150" },
      { pid: 8, pname: "Tablet Pro", pdesc: "10.5-inch display, 64GB storage, stylus included", price: 19999, img: "https://via.placeholder.com/150" },
      { pid: 9, pname: "Wireless Mouse", pdesc: "Ergonomic design, long battery life", price: 899, img: "https://via.placeholder.com/150" },
      { pid: 10, pname: "Mechanical Keyboard", pdesc: "RGB backlit keys, blue switches", price: 3999, img: "https://via.placeholder.com/150" }
    ];
    saveData("products", products);
  }

  if (!localStorage.getItem("customers")) {
    const customers = [
      { cid: 1, fname: "Harsha", lname: "Vardhan", email: "harsha@example.com", phone: "9876543210" },
      { cid: 2, fname: "Riya", lname: "Sharma", email: "riya.sharma@example.com", phone: "9988776655" },
      { cid: 3, fname: "Aarav", lname: "Kumar", email: "aarav.kumar@example.com", phone: "9123456780" },
      { cid: 4, fname: "Meena", lname: "Patel", email: "meena.patel@example.com", phone: "9765432109" },
      { cid: 5, fname: "Rohan", lname: "Singh", email: "rohan.singh@example.com", phone: "9911223344" },
      { cid: 6, fname: "Priya", lname: "Iyer", email: "priya.iyer@example.com", phone: "9090909090" },
      { cid: 7, fname: "Kabir", lname: "Verma", email: "kabir.verma@example.com", phone: "9501234567" },
      { cid: 8, fname: "Sneha", lname: "Nair", email: "sneha.nair@example.com", phone: "9856743210" },
      { cid: 9, fname: "Arjun", lname: "Gupta", email: "arjun.gupta@example.com", phone: "9321654789" },
      { cid: 10, fname: "Simran", lname: "Kaur", email: "simran.kaur@example.com", phone: "9700012345" }
    ];
    saveData("customers", customers);
  }

  if (!localStorage.getItem("feedbacks")) {
    const feedbacks = [
      { fid: 1, pid: 1, cid: 1, rate: 5, comment: "Excellent sound quality, worth the price!" },
      { fid: 2, pid: 2, cid: 3, rate: 4, comment: "Good phone but battery drains fast." },
      { fid: 3, pid: 3, cid: 5, rate: 5, comment: "Perfect for gaming, runs smooth." },
      { fid: 4, pid: 4, cid: 2, rate: 4, comment: "Bass is amazing, loud and clear." },
      { fid: 5, pid: 5, cid: 4, rate: 3, comment: "Good features but strap quality could be better." },
      { fid: 6, pid: 6, cid: 6, rate: 5, comment: "Camera quality is outstanding!" },
      { fid: 7, pid: 7, cid: 7, rate: 4, comment: "Crisp picture quality, sound is average." },
      { fid: 8, pid: 8, cid: 8, rate: 4, comment: "Lightweight and good for note-taking." },
      { fid: 9, pid: 9, cid: 9, rate: 5, comment: "Very comfortable and responsive." },
      { fid: 10, pid: 10, cid: 10, rate: 5, comment: "Best keyboard I ever used for coding." }
    ];
    saveData("feedbacks", feedbacks);
  }
}
preloadData();

// ------------------- Product CRUD -------------------
function addProduct(pname, pdesc, price, img) {
  const products = getData("products");
  const pid = Date.now() + Math.floor(Math.random() * 1000); // Unique ID fix
  products.push({ pid, pname, pdesc, price, img });
  saveData("products", products);
}

function deleteProduct(pid) {
  const products = getData("products").filter(p => p.pid !== pid);
  saveData("products", products);
}

function updateProduct(pid, pname, pdesc, price, img) {
  const products = getData("products");
  const idx = products.findIndex(p => p.pid === pid);
  if (idx !== -1) {
    products[idx] = { ...products[idx], pname, pdesc, price };
    if (img) products[idx].img = img;
    saveData("products", products);
  }
  // Reset file input after edit
  const fileInput = document.getElementById("editImg");
  if (fileInput) fileInput.value = "";
}

// ------------------- Customer CRUD -------------------
function addCustomer(fname, lname, email, phone) {
  const customers = getData("customers");
  const cid = Date.now() + Math.floor(Math.random() * 1000); // Unique ID fix
  customers.push({ cid, fname, lname, email, phone });
  saveData("customers", customers);
}

function deleteCustomer(cid) {
  const customers = getData("customers").filter(c => c.cid !== cid);
  saveData("customers", customers);
}

// ------------------- Feedback CRUD -------------------
function addFeedback(pid, cid, rate, comment) {
  // Rating check
  if (rate < 1 || rate > 5) {
    alert("Rating must be between 1 and 5");
    return;
  }

  const feedbacks = getData("feedbacks");
  const fid = Date.now() + Math.floor(Math.random() * 1000); // Unique ID fix
  feedbacks.push({ fid, pid, cid, rate, comment });
  saveData("feedbacks", feedbacks);
}

function deleteFeedback(fid) {
  const feedbacks = getData("feedbacks").filter(f => f.fid !== fid);
  saveData("feedbacks", feedbacks);
}


// ------------------- Preload 30 Records -------------------
function preloadData() {
  if (!localStorage.getItem("products")) {
    const products = [
      { pid: 1, pname: "Wireless Headphones", pdesc: "Noise-cancelling Bluetooth headphones", price: 2499.99, img: "headphones.jpg" },
      { pid: 2, pname: "Smartphone X12", pdesc: "6.5-inch AMOLED, 128GB storage, 48MP camera", price: 32999, img: "smartphone.jpg" },
      { pid: 3, pname: "Gaming Laptop", pdesc: "RTX 4060 GPU, 16GB RAM, 512GB SSD", price: 84999, img: "laptop.jpg" },
      { pid: 4, pname: "Bluetooth Speaker", pdesc: "Portable waterproof speaker with deep bass", price: 4999, img: "speaker.jpg" },
      { pid: 5, pname: "Smart Watch", pdesc: "Fitness tracking with heart rate & GPS", price: 7999, img: "watch.jpg" },
      { pid: 6, pname: "DSLR Camera", pdesc: "24MP DSLR with dual-lens kit", price: 55999, img: "camera.jpg" },
      { pid: 7, pname: "LED TV 55\"", pdesc: "4K Ultra HD Smart TV", price: 42999, img: "tv.jpg" },
      { pid: 8, pname: "Tablet Pro", pdesc: "10.5-inch display, 64GB storage, stylus included", price: 19999, img: "tablet.jpg" },
      { pid: 9, pname: "Wireless Mouse", pdesc: "Ergonomic design, long battery life", price: 899, img: "mouse.jpg" },
      { pid: 10, pname: "Mechanical Keyboard", pdesc: "RGB backlit keys, blue switches", price: 3999, img: "keyboard.jpg" }
    ];
    saveData("products", products);
  }

  if (!localStorage.getItem("customers")) {
    const customers = [
      { cid: 1, fname: "Harsha", lname: "Vardhan", email: "harsha@example.com", phone: "9876543210" },
      { cid: 2, fname: "Riya", lname: "Sharma", email: "riya.sharma@example.com", phone: "9988776655" },
      { cid: 3, fname: "Aarav", lname: "Kumar", email: "aarav.kumar@example.com", phone: "9123456780" },
      { cid: 4, fname: "Meena", lname: "Patel", email: "meena.patel@example.com", phone: "9765432109" },
      { cid: 5, fname: "Rohan", lname: "Singh", email: "rohan.singh@example.com", phone: "9911223344" },
      { cid: 6, fname: "Priya", lname: "Iyer", email: "priya.iyer@example.com", phone: "9090909090" },
      { cid: 7, fname: "Kabir", lname: "Verma", email: "kabir.verma@example.com", phone: "9501234567" },
      { cid: 8, fname: "Sneha", lname: "Nair", email: "sneha.nair@example.com", phone: "9856743210" },
      { cid: 9, fname: "Arjun", lname: "Gupta", email: "arjun.gupta@example.com", phone: "9321654789" },
      { cid: 10, fname: "Simran", lname: "Kaur", email: "simran.kaur@example.com", phone: "9700012345" }
    ];
    saveData("customers", customers);
  }

  if (!localStorage.getItem("feedbacks")) {
    const feedbacks = [
      { fid: 1, pid: 1, cid: 1, rate: 5, comment: "Excellent sound quality, worth the price!" },
      { fid: 2, pid: 2, cid: 3, rate: 4, comment: "Good phone but battery drains fast." },
      { fid: 3, pid: 3, cid: 5, rate: 5, comment: "Perfect for gaming, runs smooth." },
      { fid: 4, pid: 4, cid: 2, rate: 4, comment: "Bass is amazing, loud and clear." },
      { fid: 5, pid: 5, cid: 4, rate: 3, comment: "Good features but strap quality could be better." },
      { fid: 6, pid: 6, cid: 6, rate: 5, comment: "Camera quality is outstanding!" },
      { fid: 7, pid: 7, cid: 7, rate: 4, comment: "Crisp picture quality, sound is average." },
      { fid: 8, pid: 8, cid: 8, rate: 4, comment: "Lightweight and good for note-taking." },
      { fid: 9, pid: 9, cid: 9, rate: 5, comment: "Very comfortable and responsive." },
      { fid: 10, pid: 10, cid: 10, rate: 5, comment: "Best keyboard I ever used for coding." }
    ];
    saveData("feedbacks", feedbacks);
  }
}

// Preload data on first load
preloadData();

// ------------------- Product CRUD -------------------
function addProduct(pname, pdesc, price, img) {
  const products = getData("products");
  const pid = Date.now();
  products.push({ pid, pname, pdesc, price, img });
  saveData("products", products);
}

function deleteProduct(pid) {
  const products = getData("products").filter(p => p.pid !== pid);
  saveData("products", products);
}

function updateProduct(pid, pname, pdesc, price, img) {
  const products = getData("products");
  const idx = products.findIndex(p => p.pid === pid);
  if (idx !== -1) {
    products[idx] = { ...products[idx], pname, pdesc, price };
    if (img) products[idx].img = img;
    saveData("products", products);
  }
}

// ------------------- Customer CRUD -------------------
function addCustomer(fname, lname, email, phone) {
  const customers = getData("customers");
  const cid = Date.now();
  customers.push({ cid, fname, lname, email, phone });
  saveData("customers", customers);
}

function deleteCustomer(cid) {
  const customers = getData("customers").filter(c => c.cid !== cid);
  saveData("customers", customers);
}

// ------------------- Feedback CRUD -------------------
function addFeedback(pid, cid, rate, comment) {
  const feedbacks = getData("feedbacks");
  const fid = Date.now();
  feedbacks.push({ fid, pid, cid, rate, comment });
  saveData("feedbacks", feedbacks);
}

function deleteFeedback(fid) {
  const feedbacks = getData("feedbacks").filter(f => f.fid !== fid);
  saveData("feedbacks", feedbacks);
}
