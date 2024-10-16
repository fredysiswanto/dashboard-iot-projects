import Footer from '@/components/partials/Footer';
import Header from '@/components/partials/Header';
import SideNav from '@/components/partials/SideNav';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div>
      <Header></Header>
      <h1>Dashboard</h1>
      <SideNav></SideNav>
      <Footer></Footer>
    </div>
  );
}
