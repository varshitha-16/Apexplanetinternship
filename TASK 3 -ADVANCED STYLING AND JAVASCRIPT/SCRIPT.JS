body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  text-align: center;
}

header {
  background-color: #4caf50;
  color: white;
  padding: 20px;
}

section {
  margin: 30px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
}


@media (max-width: 768px) {
  body {
    background-color: #f0f0f0;
  }

  h1 {
    font-size: 22px;
  }

  section {
    font-size: 14px;
    margin: 15px;
  }
}

@media (min-width: 769px) {
  body {
    background-color: #e0f7fa;
  }

  h1 {
    font-size: 32px;
  }

  section {
    font-size: 18px;
    margin: 30px auto;
    max-width: 700px;
  }
}
