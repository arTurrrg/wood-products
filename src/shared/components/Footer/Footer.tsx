import Logo from '@/assets/images/logo.png';

export default function Footer() {
  return (
    <div className="bg-[#1d1c1c] relative">
      <div className="container flex justify-between items-center my-16">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}
