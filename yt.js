/*
 * TODO: 3) YouTrack - load servers, project ids from hub, really need?
 * TODO: 4) YouTrack - auto discover server url, and project id by Hub resource
 * TODO: 5) mandatory fields
 * TODO: 6) issue fields to show by hover
 * TODO: 7) project id validation
 * */

var YouTrack = React.createClass({
  getInitialState: function () {
    return {
      projectID: this.props.projectID
    };
  },

  render: function() {
    var me = this;
    return React.DOM.table({className: 'create-project__table'},[
      React.DOM.tr(null, [
        React.DOM.td({ className: 'create-project__labels' }, "YouTrack server url: "),
        React.DOM.td({ className: 'create-project__controls' }, '${servers}'),
        React.DOM.td(null)
      ]),
        React.DOM.tr(null, [
          React.DOM.td({ className: 'create-project__labels' }, "YouTrack project id: "),
          React.DOM.td({ className: 'create-project__controls' },
              React.DOM.div({className: 'ring-select-wrapper'},
                React.DOM.select({
                  className: 'ring-select',
                  value: this.state.projectID,
                  onChange: function(event) {
                    me.setState({projectID: event.target.value});
                  }
                }, [${projects}])
              )
          ),
          React.DOM.td(null)
      ])
    ]);
  },

  validate: function() {
    return true;
  }
});

window.YouTrack = YouTrack;
