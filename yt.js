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
        React.DOM.td({ className: 'create-project__labels' }, "YouTrack project ID: "),
        React.DOM.td({ className: 'create-project__controls' },
            React.DOM.input({
              id: 'youtrack.projectId',
              type: 'text',
              className: 'ring-input form-input',
              value: this.state.projectID,
              onChange: function (event) {
                self.setState({projectID : event.target.value});
              }
            })
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




/*
  Dropdown for services, resources
 *  services = { service_id: {name: service_name, url: service_url, resources: [{id: res_is, name: res_name}, ..]},
 *               ...}
 * */

/*
var services = ${resources};


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
        React.DOM.td({ className: 'create-project__labels' }, "Service: "),
        React.DOM.td({ className: 'create-project__controls' },
            React.DOM.div({className: 'ring-select-wrapper'},
                React.DOM.select({
                    className: 'ring-select',
                    value: this.state.projectID,
                    onChange: function(event) {
                      me.setState({projectID: event.target.value});
                      me.updateResources(event.target.value);
                    }
                  }, me.getServiceOptions())
            )
        ),
        React.DOM.td(null)
      ]),
        React.DOM.tr(null, [
          React.DOM.td({ className: 'create-project__labels' }, "Resource: "),
          React.DOM.td({ className: 'create-project__controls' },
              React.DOM.div({className: 'ring-select-wrapper'},
                React.DOM.select({
                    id: 'youtrack.resources',
                    className: 'ring-select',
                    value: this.state.projectID,
                    onChange: function(event) {
                      me.setState({projectID: event.target.value});
                    }
                  }, me.getInitialResourcesOptions())
              )
          ),
          React.DOM.td(null)
      ])
    ]);
  },

  validate: function() {
    return true;
  },

  getServiceOptions: function() {
    var options = [];
    for(var id in services) {
      options.push(React.DOM.option({value: id}, services[id].name + ": " + services[id].url));
    }
    return options;
  },

  getInitialResourcesOptions: function() {
    var options = [];
    for(var id in services) {
      var resources = services[serviceId].resources; // array
      for(var i = 0; i < resources.length; i++) {
        options.push(React.DOM.option({value: resources[i]}, services[0][i].name));
      }
      break;
    }
    return options;
  },

  updateResources: function(serviceId) {
    var options = "";
    var resources = services[serviceId].resources; // array
    for(var i = 0; i < resources.length; i++) {
      options += "<option value='" + resources[i] + "'>" + services[0][i].name + "</option>";
    }
    $(document.getElementById('youtrack.resources')).clear();
    $(document.getElementById('youtrack.resources')).appendChild(options);
  }
});*/




