// js/main.js
document.addEventListener("DOMContentLoaded", function () {
  // 1. 侧边栏点击效果
  const sidebarLinks = document.querySelectorAll(".sidebar li");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // 移除所有active类
      sidebarLinks.forEach((l) => l.classList.remove("active"));
      // 给当前点击的添加active类
      this.classList.add("active");

      // 可以加个提示
      console.log("点击了：", this.textContent);
    });
  });

  // 2. 卡片悬停效果增强
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s ease";
    });
  });

  // 3. 返回顶部按钮（可选）
  // 创建返回顶部按钮
  const backToTop = document.createElement("button");
  backToTop.innerHTML = "↑ 返回顶部";
  backToTop.className = "back-to-top";
  backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        padding: 10px 20px;
        background: rgba(102, 126, 234, 0.8);
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        display: none;
        z-index: 1000;
    `;

  document.body.appendChild(backToTop);

  // 监听滚动
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // 点击返回顶部
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // ===== 新增：4. 卡片点击跳转新页面（替换原有alert逻辑）=====
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      // 获取卡片标题（去空格，精准匹配）
      const title = this.querySelector("h4").textContent.trim();
      // 标题和详情页的映射关系
      const pageMap = {
        小林家的龙女仆: "detail/maidragon.html",
        轻音少女: "detail/k-on.html",
        冰菓: "detail/hyouka.html",
        青春猪头少年系列: "detail/boy.html",
      };

      // 获取目标页面，找不到则提示
      const targetUrl = pageMap[title];
      if (targetUrl) {
        // 新标签页打开详情页
        window.open(targetUrl, "_blank");
      } else {
        // 没有对应页面时，保留原有alert提示
        const desc = this.querySelector("p").textContent;
        alert(`📺 ${title}\n\n${desc}`);
      }
    });
  });

  // ===== 新增：5. 排行榜点击跳转（可选）=====
  const rankLinks = document.querySelectorAll(".sidebar ul li");
  rankLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const text = this.textContent.trim();
      // 匹配排行榜里的“轻音少女”跳转
      if (text.includes("轻音少女")) {
        e.preventDefault(); // 阻止默认a标签行为（如果有的话）
        window.open("detail/k-on.html", "_blank");
      }
    });
  });
});

// 6. 搜索功能（可选）
function createSearchBar() {
  const sidebar = document.querySelector(".sidebar");
  const searchDiv = document.createElement("div");
  searchDiv.className = "search-box";
  searchDiv.style.cssText = `
        margin-bottom: 20px;
        padding: 10px;
    `;

  searchDiv.innerHTML = `
        <input type="text" 
               placeholder="🔍 搜索动漫..." 
               style="width: 100%; padding: 8px; border-radius: 20px; border: 1px solid #ddd;"
        >
    `;

  sidebar.insertBefore(searchDiv, sidebar.firstChild);

  // 搜索功能
  const searchInput = searchDiv.querySelector("input");
  searchInput.addEventListener("input", function (e) {
    const searchText = e.target.value.toLowerCase();
    const animeLinks = document.querySelectorAll(".sidebar a");

    animeLinks.forEach((link) => {
      const text = link.textContent.toLowerCase();
      if (text.includes(searchText)) {
        link.style.display = "block";
      } else {
        link.style.display = "none";
      }
    });
  });
}

// 调用搜索功能
createSearchBar();
