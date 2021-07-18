const firstCategoriesList = document.querySelector("#categories");


const countCategories = listElement => {
  console.log(`В списке ${listElement.children.length} категории`);

  [...listElement.children].forEach(element =>
    console.log(`•Категория: ${element.querySelector("h2").textContent}
•Количество елементов: ${element.querySelector("ul").children.length}`),
  );
};

countCategories(firstCategoriesList);
