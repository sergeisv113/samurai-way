import React from 'react';
import s from './ProfileInfo.module.css';
import defaultAva from '../../../avatars/765-default-avatar.png';
import {UsersProfilePropsType} from '../ProfileContainer';

export class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditeMode() {
        console.log()
        this.setState({
            editMode: true
        });
    }
    deactivateEditeMode() {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditeMode.bind(this)}>{'hi'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditeMode.bind(this)} value={'hi'}/>
                    </div>
                }
            </div>
        );
    }
};

