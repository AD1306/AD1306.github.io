var treeData = {
    "name": "SKILLS",
    "children": [
        {
            "name": "FRONT-END",
            "children": [
                {
                    "name": "CORE",
                    "children": [
                        {
                            "name": "HTML5",
                            "children": []
                        },
                        {
                            "name": "CSS3",
                            "children": []
                        }
                    ]
                },
                {
                    "name": "FRAMEWORKS",
                    "children": [
                        {
                            "name": "ANGULAR",
                            "children": []
                        },
                        {
                            "name": "REACTJS",
                            "children": []
                        },
                    ]
                },
                {
                    "name": "LANGUAGES",
                    "children": [
                        {
                            "name": "JAVASCRIPT",
                            "children": []
                        },
                        {
                            "name": "TYPESCRIPT",
                            "children": []
                        }
                    ]
                },
                {
                    "name": "UI FRAMEWORKS",
                    "children": [
                        {
                            "name": "MATERIALIZECSS",
                            "children": []
                        },
                        {
                            "name": "BOOTSTRAP",
                            "children": []
                        },
                        {
                            "name": "JQUERY",
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "BACK-END",
            "children": [
                {
                    "name": "LANGUAGES",
                    "children": [
                        {
                            "name": "JAVA",
                            "children": []
                        },
                        {
                            "name": "C#",
                            "children": []
                        }
                    ]
                },
                {
                    "name": "API",
                    "children": [
                        {
                            "name": "RESTFUL",
                            "children": [
                                {
                                    "name": "DOTNET CORE",
                                    "children": []
                                },
                                {
                                    "name": "NODEJS (EXPRESSJS)",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "name": "GRAPHQL",
                            "children": []
                        }
                    ]
                },
                {
                    "name": "CLOUD",
                    "children": [
                        {
                            "name": "IBM BLUEMIX",
                            "children": []
                        },
                        {
                            "name": "AZURE DEVOPS",
                            "children": []
                        },
                        {
                            "name": "FIREBASE",
                            "children": []
                        },
                        {
                            "name": "DOCKER",
                            "children": []
                        },
                        {
                            "name": "NGINX",
                            "children": []
                        }
                    ]
                },
                {
                    "name": "DATABASE",
                    "children": [
                        {
                            "name": "NOSQL",
                            "children": [
                                {
                                    "name": "MONGODB",
                                    "children": []
                                },
                                {
                                    "name": "AZURE COSMOS DB",
                                    "children": []
                                },
                                {
                                    "name": "COUCHDB",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "name": "SQL",
                            "children": [
                                {
                                    "name": "MSSQL",
                                    "children": []
                                },
                                {
                                    "name": "MYSQL",
                                    "children": []
                                },
                                {
                                    "name": "POSTGRESQL",
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "OTHER",
            "children": [
                {
                    "name": "VERSION CONTROL",
                    "children": [
                        {
                            "name": "GIT",
                            "children": []
                        },
                        {
                            "name": "TOOLS",
                            "children": [
                                {
                                    "name": "BITBUCKET",
                                    "children": []
                                },
                                {
                                    "name": "GITHUB",
                                    "children": []
                                },
                                {
                                    "name": "AZURE",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "SCRIPTING",
                    "children": [
                        {
                            "name": "BASH",
                            "children": []
                        }
                    ]
                },
                {
                    "name": "AUTHENTICATION",
                    "children": [
                        {
                            "name": "SSL CERTIFICATES",
                            "children": []
                        },
                        {
                            "name": "OIDC/OAUTH2",
                            "children": []
                        }
                    ]
                }
            ]
        }
    ]
}

// Set the dimensions and margins of the diagram
var margin = {top: 30, right: 90, bottom: 30, left: 90},
    width = $(document).width(),
    height = $(window).height() - margin.bottom - margin.top;

// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#skillsContent .skillsTree").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate("
          + margin.left + "," + margin.top + ")");

var i = 0,
    duration = 750,
    root;

// declares a tree layout and assigns the size
var treemap = d3.tree().size([height, width]);

// Assigns parent, children, height, depth
root = d3.hierarchy(treeData, function(d) { return d.children; });
root.x0 = height / 2;
root.y0 = 0;

// Collapse after the second level
root.children.forEach(collapse);

update(root);

// Collapse the node and all it's children
function collapse(d) {
  if(d.children) {
    d._children = d.children
    d._children.forEach(collapse)
    d.children = null
  }
}

function update(source) {

  // Assigns the x and y position for the nodes
  var treeData = treemap(root);

  // Compute the new tree layout.
  var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);
  // Normalize for fixed-depth.
  nodes.forEach(function(d){ d.y = d.depth * 180});

  // ****************** Nodes section ***************************

  // Update the nodes...
  var node = svg.selectAll('g.node')
      .data(nodes, function(d) {return d.id || (d.id = ++i); });

  // Enter any new modes at the parent's previous position.
  var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", function(d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
    })
    .on('click', click);

  // Add Circle for the nodes
  nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style("fill", function(d) {
          return d._children ? "#83CCC5 " : "#3C948B  ";
      });

  // Add labels for the nodes


  nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("x", function(d) {
          return d.children || d._children ? -13 : 13;
      })
      .style('fill', '#4db6ac')
      .attr("text-anchor", function(d) {
          return d.children || d._children ? "end" : "start";
      })
      .text(function(d) { return d.data.name; });

  // UPDATE
  var nodeUpdate = nodeEnter.merge(node);

  // Transition to the proper position for the node
  nodeUpdate.transition()
    .duration(duration)
    .attr("transform", function(d) { 
        return "translate(" + d.y + "," + d.x + ")";
     });

  // Update the node attributes and style
  nodeUpdate.select('circle.node')
    .attr('r', 10)
    .style("fill", function(d) {
        return d._children ? "#83CCC5 " : "#3C948B  ";
    })
    .attr('cursor', 'pointer');


  // Remove any exiting nodes
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) {
          return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

  // On exit reduce the node circles size to 0
  nodeExit.select('circle')
    .attr('r', 1e-6);

  // On exit reduce the opacity of text labels
  nodeExit.select('text')
    .style('fill-opacity', 1e-6);

  // ****************** links section ***************************

  // Update the links...
  var link = svg.selectAll('path.link')
      .data(links, function(d) { return d.id; });
      
  // Enter any new links at the parent's previous position.
  var linkEnter = link.enter().insert('path', "g")
      .attr("class", "link")
      .attr('d', function(d){
        var o = {x: source.x0, y: source.y0}
        return diagonal(o, o)
      });

  // UPDATE
  var linkUpdate = linkEnter.merge(link);

  // Transition back to the parent element position
  linkUpdate.transition()
      .duration(duration)
      .attr('d', function(d){ return diagonal(d, d.parent) });

  // Remove any exiting links
  var linkExit = link.exit().transition()
      .duration(duration)
      .attr('d', function(d) {
        var o = {x: source.x, y: source.y}
        return diagonal(o, o)
      })
      .remove();

  // Store the old positions for transition.
  nodes.forEach(function(d){
    d.x0 = d.x;
    d.y0 = d.y;
  });

  // Creates a curved (diagonal) path from parent to the child nodes
  function diagonal(s, d) {

    path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

    return path
  }

  // Toggle children on click.
  function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
    update(d);
  }
}