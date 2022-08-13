class PostFix {
  constructor() {
    this.stack = new Stack();
    this.array = [];
    this.postFixArray = [];
    this.counter = 0;
  }
  box_create(array) {
    if (array) {
      this.stack.box_create(array);
    } else {
      this.stack.invaildInput();
    }
  }

  showOnPostFixBox(value) {
    if (value) {
      $("#postFixArray").append(
        '<div id="r' +
          this.counter +
          1 +
          '" class="stack_box">  ' +
          value +
          " </div>"
      );
      this.counter++;
    } else {
      this.stack.invaildInput();
    }
  }
  rank(value) {
    if ("^" == value) return 5;
    else if ("/" == value) return 4;
    else if ("*" == value) return 3;
    else return 2;
  }

  postFixConversion(str) {
    if (array) {
      $("#postFixArray").empty();
      let ret = "";
      let st = [];
      for (let i = 0; i < str.length; i++) {
        if (str[i] >= "a" && str[i] <= "z") {
          this.showOnPostFixBox(str[i]);
          ret += str[i];
        } else if (str[i] == "(") {
          st.push(str[i]);
        } else if (str[i] == ")") {
          while (st.length > 0) {
            let top = st.pop();
            if (top == "(") {
              st.push(top);
              break;
            }
            ret += top;
            this.showOnPostFixBox(top);
          }
          if (st.length > 0) st.pop();
        } else {
          while (st.length > 0) {
            let top = st.pop();
            if (this.rank(top) < this.rank(str[i]) && top != "(") {
              console.log(top);
              console.log(this.rank(top), this.rank(str[i]));
              ret += top;
              this.showOnPostFixBox(top);
            } else {
              st.push(top);
              break;
            }
          }
          st.push(str[i]);
        }
      }
      while (st.length > 0) {
        this.showOnPostFixBox(st.pop());
      }
      console.log(ret);
    } else {
      this.stack.invaildInput();
    }
  }
}

$(document).ready(function () {
  let postFix = new PostFix();
  $("#postFix").click(function () {
    let value = document.getElementById("push-item").value;
    postFix.box_create(value);
    postFix.postFixConversion(value);
  });
});
