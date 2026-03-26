import { siteConfig } from "../data/siteConfig";

export function buildWhatsAppUrl({ name, phone, email, message }) {
  const text = [
    "Hello Desi Tadka,",
    `Name: ${name || "-"}`,
    `Phone: ${phone || "-"}`,
    `Email: ${email || "-"}`,
    `Message: ${message || "-"}`,
  ].join("\n");

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    text,
  )}`;
}

export function buildOrderWhatsAppUrl({ cart, totalPrice, note }) {
  const currency = "\u20B9";
  const orderHeader = "\uD83C\uDF7D\uFE0F New Order - Desi Tadka";
  const totalLabel = `\uD83D\uDCB0 Total: ${currency}${Number(totalPrice).toFixed(0)}`;
  const noteLabel = `\uD83D\uDCDD Note: ${note?.trim() || "No special instructions"}`;
  const footer = "\uD83D\uDCCD Please confirm order & delivery time.";

  const itemLines = cart.map((item, index) => {
    const unitPrice = item.selectedVariant?.price || item.price || 0;
    const lineTotal = unitPrice * item.qty;
    const sizeText = item.selectedVariant?.size
      ? ` (${item.selectedVariant.size})`
      : "";

    return [
      `${index + 1}. ${item.name}${sizeText}`,
      `   Qty: ${item.qty} \u00D7 ${currency}${unitPrice} = ${currency}${lineTotal.toFixed(0)}`,
    ].join("\n");
  });

  const text = [orderHeader, "", ...itemLines, "", totalLabel, "", noteLabel, "", footer].join(
    "\n",
  );

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    text,
  )}`;
}
