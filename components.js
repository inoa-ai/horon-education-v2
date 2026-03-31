export function injectComponents() {
  const headerHTML = `
    <nav class="navbar">
      <div class="navbar-container">
        <a href="index.html" class="logo">HORON EDUCATION</a>
        <ul class="nav-links">
          <li><a href="finance.html">財務研修</a></li>
          <li><a href="university.html">大学向け</a></li>
          <li><a href="corporate.html">企業・自治体向け</a></li>
          <li><a href="instructors.html">講師紹介</a></li>
          <li><a href="public-courses.html">公開講座</a></li>
          <li><a href="it-support.html">ITサポート</a></li>
          <li><a href="about.html">会社案内</a></li>
          <li><a href="contact.html">お問い合わせ</a></li>
        </ul>
      </div>
    </nav>
  `;

  const footerHTML = `
    <footer class="footer" id="contact">
      <div class="footer-content">
        <h2>お問い合わせ</h2>
        <p>研修やサービスについてのご相談は、お気軽にお問い合わせください。</p>
        <p class="tel">TEL. 045-252-5591</p>
        <a href="contact.html" class="btn btn-primary">お問い合わせフォーム</a>
      </div>
      <div class="footer-bottom">
        <p>〒232-0014 神奈川県横浜市南区吉野町３－１０</p>
        <p>Copyright © HORONED,Ltd. All rights reserved.</p>
      </div>
    </footer>
  `;

  // Inject Header if not already there
  if (!document.querySelector('.navbar')) {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }
  
  // Inject Footer if not already there
  if (!document.querySelector('.footer')) {
    const appContainer = document.getElementById('app') || document.body;
    appContainer.insertAdjacentHTML('beforeend', footerHTML);
  }
}
