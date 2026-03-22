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

  // 监听滚动 控制“返回顶部”按钮的显示和隐藏
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
  const cards = document.querySelectorAll(".card");
  // ===== 新增：4. 卡片点击跳转新页面（替换原有alert逻辑）=====
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      // 获取卡片标题（去空格，精准匹配）
      const title = this.querySelector("h4")
        .textContent.trim()
        .replace(/[🔥⭐✨]/g, "");
      // 标题和详情页的映射关系
      const pageMap = {
        轻音少女: "detail/k-on.html",
        魔女之旅: "detail/elaina/elainaNel.html",
      };
      const targetUrl = pageMap[title]; //查找相应的网址
      if (targetUrl) {
        window.open(targetUrl, "_blank");
        //window.open() 是浏览器提供的函数，用来打开新窗口或新标签页
        // 第一个参数 targetUrl：要打开的网址
        // 第二个参数 "_blank"：指定打开方式
        // "_blank" → 在新标签页打开（最常用）
        // "_self" → 在当前页面打开
        // "_parent" → 在父框架打开
      } else {
        alert(`${title}\n\n房鑫同学正在开发中该详细页...`);
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
      if (text.includes("🔥魔女之旅")) {
        e.preventDefault(); // 阻止默认a标签行为（如果有的话）
        window.open("detail/elaina/elainaNel.html", "_blank");
      }
    });
  });
});
