import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ
  const li = document.createElement("li");
  li.innerText = inputText;

  // button (完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（div)を未完了リストから削除
    deleteFromTodoList(deleteButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    console.log(addTarget);
    // todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    console.log(text);

    // div以下を初期化
    addTarget.textContent = null;
    console.log("初期化");
    console.log(addTarget);
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成
    const backbutton = document.createAttribute("button");
    backbutton.innerText = "戻す";

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);

    // 完了リストに追加
    document.getElementById("done-list").appendChild(addTarget);
  });

  // button (削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div)を未完了リストから削除
    deleteFromTodoList(deleteButton.parentNode);
  });

  // div の子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("todo-list").appendChild(div);

  // 未完了リストから指定の要素を削除
  const deleteFromTodoList = (target) => {
    document.getElementById("todo-list").removeChild(target);
  };
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
