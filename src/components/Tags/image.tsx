import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const ImageComponent: React.FC<{
  src: string;
  _style?: string;
}> = ({ src, _style }) => {
  return (
    <LazyLoadImage
      //   className="w-96"
      effect="blur"
      src={src}
      className={_style}
      useIntersectionObserver={true}
    />
  );
};
