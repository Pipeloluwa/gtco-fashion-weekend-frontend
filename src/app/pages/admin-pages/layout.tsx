import MenuComponent from "@/app/components/admin-components/admin-shared-components/MenuComponent";
import NavBarComponent from "@/app/components/admin-components/admin-shared-components/NavBarComponent";
import { interFont } from "@/app/fonts/fontsConfig";



interface IAdminLayout {
    children: React.ReactNode;
}


const AdminLayout:React.FC<IAdminLayout>= ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) =>  {
  
  return (
    <div className={`${interFont.className} text-gray-800 bg-gray-50 w-screen h-screen flex overflow-hidden`}>
        <MenuComponent />

        <main id="mainComponent" className="w-full h-full overflow-hidden overflow-y-scroll">
            <NavBarComponent />
            {children}
        </main>
    </div>
  );
}

export default AdminLayout;
