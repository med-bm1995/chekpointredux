import React from 'react'
import { Button, Modal } from 'reactstrap';

function modale() {
    return (
        <div>
            <Modal>
                <label>
                    Name:
    <input type="text" name="name" />
                </label>
                <input type="submit" defaultValue="Submit" />
            </Modal>

        </div>
    )
}

export default modale
