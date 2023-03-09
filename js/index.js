const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

const onChangeRangesHSL = () => {
  $("#color-display-hsl").style.backgroundColor = `hsl(${$("#hue").value}, ${
    $("#saturation").value
  }%, ${$("#lightness").value}%)`;

  $("#value-hue").innerText = `${$("#hue").value}`;
  $("#value-saturation").innerText = `${$("#saturation").value}%`;
  $("#value-lightness").innerText = `${$("#lightness").value}%`;
};
const spanColorHsl = $("#color-hsl");
const resultColorHsl = () => {
  spanColorHsl.innerText = `Cor: hsl (${$("#hue").value}, ${
    $("#saturation").value
  }%, ${$("#lightness").value}%)`;
};
const divColorHsl = $("#color-display-hsl");
divColorHsl.onclick = resultColorHsl;

$all("#color-ranges-hsl input[type=range").forEach(
  (range) => (range.oninput = onChangeRangesHSL)
);

const onChangeRangesRGBA = () => {
  $("#color-display-rgba").style.backgroundColor = `rgba(${$("#red").value}, ${
    $("#green").value
  }, ${$("#blue").value}, ${$("#alpha").value})`;

  $("#value-red").innerText = `${$("#red").value}`;
  $("#value-green").innerText = `${$("#green").value}`;
  $("#value-blue").innerText = `${$("#blue").value}`;
  $("#value-alpha").innerText = `${$("#alpha").value}`;
};
const spanColorRgba = $("#color");

const resultColorRgba = () => {
  spanColorRgba.innerText = `Cor: RGB (${$("#red").value}, ${
    $("#green").value
  }, ${$("#blue").value}, ${$("#alpha").value})`;
};
const divColorRgba = $("#color-display-rgba");
divColorRgba.onclick = resultColorRgba;

$all("#color-ranges-rgba input[type=range").forEach(
  (range) => (range.oninput = onChangeRangesRGBA)
);
