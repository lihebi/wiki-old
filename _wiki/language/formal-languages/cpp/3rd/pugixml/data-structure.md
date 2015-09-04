---
title: pugi data structure
---

* pugi::xml_node
* pugi::xml_document
* pugi::xml_attribute

## xml_node_type
* node_document: sub-class of xml_node. [-]name, [-]value
* node_element: [+]name, [+]attr, [+]children, [-]value
* node_pcdata: [+]value, [-]name, [-]children/attr
