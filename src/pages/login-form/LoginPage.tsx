import LoginForm from "../../components/login-form/LoginForm";
import {useLocation} from "react-router-dom";
import Modal from "../../components/modal/Modal";

export default function LoginPage() {
    const location = useLocation();
    const isFromIndex = !!location.state;

    return isFromIndex ? (
        <Modal onClose={() => {} }>
            <div>Ебать того рот</div>
            {/*<LoginForm />*/}
        </Modal>
    ) : <LoginForm />

}