---
layout: page
title: "Contato"
teaser: "Fale conosco, deixe uma mensagem"
header:
   image_fullwidth: "header_unsplash_4.jpg"
   title: "Equipe"
permalink: "/contact/"
---
<form action="https://formspree.io/guilherme.dcmsport@gmail.com"
      method="POST">
    <div>
        <input type="text" name="name" placeholder="*Seu Nome" required="required">
    </div>
    <div>
        <input type="email" name="_replyto" placeholder="*Seu Email" required="required">
    </div>
    <div>
        <input type="number" name="phone" placeholder="*Seu Telefone" required="required">
    </div>
    <div>
        <textarea name="message" placeholder="*Sua Mensagem" required="required" rows="6"></textarea>
    </div>
    <input type="submit" value="Enviar" class="button right">
</form>