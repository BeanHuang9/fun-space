import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useTranslation } from "react-i18next";

const FModal = ({ open, onClose, name, setName, password, setPassword, onClick }) => {
  const { t } = useTranslation();

    return (
        <Modal show={open} size="md" onClose={onClose} popup>
        <Modal.Header />
        <Modal.Body>
            <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">{t('login')}</h3>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="username" value={t('username')} />
                    </div>
                    <TextInput
                        id="username"
                        placeholder={t('placeholder_username')}
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="password" value={t('password')} />
                    </div>
                    <TextInput
                        id="password"
                        // 新增  placeholder
                        placeholder={t('placeholder_password')}
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>
            </div>
            <div className='flex justify-center mt-3 '>
              <Button onClick={onClick} disabled={!name || !password}>登入</Button>
            </div>
        </Modal.Body>
        </Modal>
    );
};

export default FModal;
