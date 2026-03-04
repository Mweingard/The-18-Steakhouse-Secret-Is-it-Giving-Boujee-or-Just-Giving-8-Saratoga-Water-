import { motion } from "framer-motion";

interface ImmersivePhotoProps {
  src: string;
  alt: string;
  caption?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

const ImmersivePhoto = ({ src, alt, caption, overlay = true, children }: ImmersivePhotoProps) => {
  return (
    <motion.section
      className="immersive-photo"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      <img src={src} alt={alt} loading="lazy" />
      {overlay && <div className="immersive-photo-overlay" />}
      {children && (
        <div className="absolute inset-0 flex items-end justify-center pb-16 px-6">
          {children}
        </div>
      )}
      {caption && (
        <div className="absolute bottom-4 left-0 right-0">
          <p className="photo-caption text-primary-foreground opacity-70">{caption}</p>
        </div>
      )}
    </motion.section>
  );
};

export default ImmersivePhoto;
