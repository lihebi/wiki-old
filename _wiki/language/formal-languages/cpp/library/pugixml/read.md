---
title: read
---

# access
if some node doesn't have name or value,
the function will return "".

node:

```c++
const char_t* xml_node::name() const;
const char_t* xml_node::value() const;
// value of the first child with type node_pcdata or node_cdata
const char_t* xml_node::child_value() const;
// wrapper for child(name).child_value()
const char_t* xml_node::child_value(const char_t* name) const;
```

attr:

```c++
const char_t* xml_attribute::name() const;
const char_t* xml_attribute::value() const;
// as_xx
int xml_attribute::as_int(int def = 0) const;
unsigned int xml_attribute::as_uint(unsigned int def = 0) const;
double xml_attribute::as_double(double def = 0) const;
float ...
bool ...
long long ...
unsigned long long ...
```

xml_text:

```c++
xml_text xml_node::text() const;
xml_node xml_text::data() const;
```

if the node is `node_pcdata` or `node_cdata`, return the node's data.
else, return the first child node of `node_pcdata` or `node_cdata`.

API:

```c++
bool xml_text::empty() const;
// equal to text.data().value()
const char_t* xml_text::get() const;
bool xml_text::set(const char_t* rhs);
```

as_xx:

```c++
const char_t* xml_text::as_string(const char_t* def = "") const;
int xml_text::as_int(int def = 0) const;
unsigned int xml_text::as_uint(unsigned int def = 0) const;
double xml_text::as_double(double def = 0) const;
float xml_text::as_float(float def = 0) const;
bool xml_text::as_bool(bool def = false) const;
long long xml_text::as_llong(long long def = 0) const;
unsigned long long xml_text::as_ullong(unsigned long long def = 0) const;
```

```c++
bool xml_text::set(int rhs);
bool xml_text::set(unsigned int rhs);
bool xml_text::set(double rhs);
bool xml_text::set(float rhs);
bool xml_text::set(bool rhs);
bool xml_text::set(long long rhs);
bool xml_text::set(unsigned long long rhs);
xml_text& xml_text::operator=(const char_t* rhs);
xml_text& xml_text::operator=(int rhs);
xml_text& xml_text::operator=(unsigned int rhs);
xml_text& xml_text::operator=(double rhs);
xml_text& xml_text::operator=(float rhs);
xml_text& xml_text::operator=(bool rhs);
xml_text& xml_text::operator=(long long rhs);
xml_text& xml_text::operator=(unsigned long long rhs);
```
