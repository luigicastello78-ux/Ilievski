import { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  eager?: boolean;
}

const OptimizedImage = ({ eager, ...props }: OptimizedImageProps) => (
  <img
    {...props}
    loading="eager"
    decoding="async"
    fetchPriority={eager ? "high" : "auto"}
  />
);

export default OptimizedImage;
