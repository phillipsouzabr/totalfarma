/* =========================================================
   DROGARIA TOTAL FARMA — SCRIPT.JS
   Vanilla JS — sem dependências externas
   ========================================================= */

(function () {
  'use strict';

  var WHATSAPP_NUMBER = '5531992093737';
  var WHATSAPP_DEFAULT_MESSAGE =
    'Olá, acessei o site da Drogaria Total Farma e gostaria de atendimento.';

  /**
   * Monta a URL oficial do WhatsApp (wa.me) com a mensagem pré-preenchida.
   * @param {string} [customMessage] Mensagem opcional para sobrescrever a padrão.
   * @returns {string} URL pronta para redirecionamento.
   */
  function buildWhatsappUrl(customMessage) {
    var message = customMessage || WHATSAPP_DEFAULT_MESSAGE;
    return (
      'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message)
    );
  }

  /**
   * Redireciona o usuário para o WhatsApp em uma nova aba.
   * Disponível globalmente caso outros elementos precisem disparar o CTA via JS.
   * @param {string} [customMessage]
   */
  function redirectToWhatsapp(customMessage) {
    var url = buildWhatsappUrl(customMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  window.redirectToWhatsapp = redirectToWhatsapp;

  /**
   * Atualiza automaticamente o ano exibido no copyright do rodapé.
   */
  function updateFooterYear() {
    var yearEl = document.getElementById('ano-atual');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateFooterYear();
  });
})();
