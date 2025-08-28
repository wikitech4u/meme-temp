interface Props {
  img: string;
}
const Blur = ({ img }: Props) => {
  return (
    <>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(12px)",
        }}
      />

      <div className="absolute inset-0 -z-10 bg-black/40" />
    </>
  );
};

export default Blur;
