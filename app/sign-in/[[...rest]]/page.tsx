import { SignIn } from '@clerk/nextjs';
import styles from './page.module.css';

export default function Page() {
    return (
        <div className={styles.container}>
            <SignIn path="/sign-in" routing="path" forceRedirectUrl={'/dashboard'} />
        </div>
    );
}
