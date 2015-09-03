---
title: xpath
---

# types
`xpath_node` can be either a node or an attribute.

```c++
xml_node xpath_node::node() const;
xml_attribute xpath_node::attribute() const;
xml_node xpath_node::parent() const;
```

`xpath_node_set`

```c++
xpath_node xpath_node_set::first() const;
const xpath_node& xpath_node_set::operator[](size_t index) const;
size_t xpath_node_set::size() const;
bool xpath_node_set::empty() const;
```

# query
```c++
// equal to select_nodes().first()
xpath_node xml_node::select_node(
  const char_t* query,
  xpath_variable_set* variables = 0
) const;
xpath_node_set xml_node::select_nodes(
  const char_t* query,
  xpath_variable_set* variables = 0
) const;
// precompiled version
xpath_node xml_node::select_node(const xpath_query& query) const;
xpath_node_set xml_node::select_nodes(const xpath_query& query) const;
```

## precompiled query
constructor:

```c++
explicit xpath_query::xpath_query(
  const char_t* query,
  xpath_variable_set* variables = 0
);
```

API:

```c++
bool xpath_query::evaluate_boolean(const xpath_node& n) const;
double xpath_query::evaluate_number(const xpath_node& n) const;
string_t xpath_query::evaluate_string(const xpath_node& n) const;
// equal to node.select_nodes()
xpath_node_set xpath_query::evaluate_node_set(const xpath_node& n) const;
// equal to node.select_node()
xpath_node xpath_query::evaluate_node(const xpath_node& n) const;
```
