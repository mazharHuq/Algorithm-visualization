class Dom {
  constructor() {}

  push_backside(value, counter) {
    console.log(value);
    // document.getElementById("pointer").innerHTML = counter;
    $("#stack").prepend(
      '<div id="r' + counter + 1 + '" class="stack_box">  ' + value + " </div>"
    );
    // document.getElementById("pushed").innerHTML = value;
    // document.getElementById("top_element").innerHTML = value;

    $("#array").append(
      '<div id="a' + counter + '" class="array_box">  ' + value + " </div>"
    );
    //document.getElementById("push-item").value = "";
    //document.getElementById("popped").innerHTML = "";
  }

  pop_backside(top_element, popValue, counter) {
    $("#r" + counter + 1).remove();
    $("#a" + counter).remove();
    if (counter >= 0) {
      //document.getElementById("top_element").innerHTML = arr[counter];
    } else {
      //  document.getElementById("top_element").innerHTML = "";
    }
    //document.getElementById("pointer").innerHTML = counter;
  }

  pop_frontside(front_element, popValue, queueCounter) {
    let ok = queueCounter * 10 + 1;
    if (ok == 1) {
      $("#r0" + ok).remove();
      $("#a0" + queueCounter).remove();
    } else {
      $("#r" + ok).remove();
      $("#a" + queueCounter).remove();
    }
  }

  push_frontside(value, counter) {
    console.log(value);
    $("#stack").prepend(
      '<div id="r' + counter + 1 + '" class="stack_box">  ' + value + " </div>"
    );
  }

  show_message_on_display(message) {
    let previousHtml = document.getElementById("array");
    let node = previousHtml.cloneNode(true);
    setTimeout(function () {
      document.getElementById("stack").style.background = "";
      document.getElementById("array-wrapper").innerHTML = "";
      document.getElementById("array-wrapper").append(node);
      document.getElementById("push-btn").removeAttribute("disabled");
    }, 500);
    document.getElementById("array-wrapper").innerHTML =
      "<h1>" + message + "</h1>";

    document.getElementById("push-btn").setAttribute("disabled", "disabled");
  }

  invaildInput() {
    setTimeout(function () {
      document.getElementById("push-item").style.border = "";
    }, 500);
    document.getElementById("push-item").style.border = "2px solid #bb3371";
  }
  peak_element(value) {
    this.show_message_on_display("Peak element is : " + value);
  }

  containerFull(array) {
    //document.getElementById("stack").style.background = "#4433ff";

    this.show_message_on_display("The container is full");
  }

  containerEmpty() {
    /*document.getElementById("stack").style.backgroundImage =
      "linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);";*/
    this.show_message_on_display("The container is empty");
  }
  containerIsNotEmpty() {
    this.show_message_on_display("The container is not empty");
  }
}
