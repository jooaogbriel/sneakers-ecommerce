import SideNav2 from '@/app/ui/dashboard/sidenav';
import styles from '../../../style'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col  md:overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} border-b border-solid border-Grayishblue`}>
        <div className={`${styles.boxWidth}`}>
          <SideNav2 />
        </div>
      </div>
      <div className="flex align-top h-full flex-grow md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}