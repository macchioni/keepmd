---
layout: layouts/base.njk
title: Contact
permalink: /contact/
---

<section class="page-contact">

  <div class="section-label">contact</div>

  <div class="contact-block">
    <h2>Parliamo.</h2>
    <p>Per lavoro, collaborazioni editoriali, o semplicemente per parlare di una frase che non tornava.</p>

    <div class="contact-links">
      <a class="contact-row" href="mailto:{{ site.email }}">
        <div class="contact-glyph">✉</div>
        <div class="contact-name">Email</div>
        <div class="contact-handle">{{ site.email }}</div>
      </a>
      <a class="contact-row" href="https://twitter.com/{{ site.twitter }}" target="_blank">
        <div class="contact-glyph">↗</div>
        <div class="contact-name">Twitter / X</div>
        <div class="contact-handle">{{ site.twitter }}</div>
      </a>
      <a class="contact-row" href="https://github.com/{{ site.github }}" target="_blank">
        <div class="contact-glyph">◯</div>
        <div class="contact-name">GitHub</div>
        <div class="contact-handle">{{ site.github }}</div>
      </a>
    </div>
  </div>

</section>
