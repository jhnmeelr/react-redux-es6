import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as entryActions from '../../actions/entryActions';

class EntriesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entry: { title: '' }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(e) {
        const entry = this.state.entry;
        entry.title = e.target.value;
        this.setState({ entry });
    }

    onClickSave() {
        this.props.actions.createEntry(this.state.entry);
    }

    entryRow(entry, index) {
        return <div key={index}>{entry.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Entries</h1>
                {this.props.entries.map(this.entryRow)}
                <h2>Add Entry</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.entry.title} />
                <input type="submit" onClick={this.onClickSave} value="Save" />
            </div>
        );
    }
}

EntriesPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    entries: React.PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        entries: state.entries
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(entryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EntriesPage);