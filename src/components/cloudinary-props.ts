export interface CloudinaryProps {
  width?: string;

  height?: string;

  resize?: "crop" | "fill" | "scale" | "pad" | "minimumPad" | "fit" | "limitFit" | "thumbnail" | "limitFill" | "minimumFit" | "limitPad" | "fillPad";

  gravity?: "face" | "auto";

  cornerRadius?: number | "max";

  rotate?: number;
  
  quality?: string | number;

  effects?: ["blur" | "grayscale" | "sepia" | "shadow" | "colorize" | "oilPaint" | "cartoonify" | "outline" | "blackwhite" | "makeTransparent" | "vectorize" | "gradientFade" | "assistColorBlind" | "removeBackground" | "backgroundRemoval" | "dropShadow"];
}
