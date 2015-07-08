---
title: CodeSurfer API Doc
---

cs_sdg.h
========

Retrieve a list of the `cs_pdg` objects defined in the SDG of the current project.

```c
cs_sdg_pdgs(
  cs_pdg pdg_list[],
  cs_size_t capacity_bytes,
  cs_size_t * bytes_needed);
```

Perform a point mode full backward slice .

```c
cs_s_slice(
  cs_const_pdg_vertex_set pdg_vertex_set,
  cs_pdg_edge_kind edge_kind,
  cs_pdg_vertex_set * out_set);
```

Perform a point-and-variable mode full backward slice .

```c
cs_s_var_slice(
  cs_const_pdg_vertex_set pdg_vertex_set,
  cs_const_abs_loc_set abs_loc_set,
  cs_pdg_edge_kind edge_kind,
  cs_pdg_vertex_set * out_set);
```

cs_pdg.h
========

Retrieve the path of the top-level file in the compilation unit containing a given `cs_pdg`.

```c
cs_pdg_compilation_unit(
  cs_pdg pdg,
  cs_file_path compilation_unit,
  cs_size_t capacity_bytes,
  cs_size_t * bytes_needed);
```

Find the `cs_sfid` and `cs_line` of the smallest offset of the entry vertex for a given `cs_pdg`.

```c
cs_pdg_file_line(
  cs_pdg pdg,
  cs_sfid * out_sfid,
  cs_line * out_line);
```

Retrieve a `cs_pdg_vertex_set` containing all vertices of a specified `cs_pdg`.

```c
cs_pdg_vertices(
  cs_pdg pdg,
  cs_const_pdg_vertex_set * out_vertex);
```

cs_pdg_vertex.h
===============

Find the file instance and line of the smallest offset for a given `cs_pdg_vertex`.

```c
cs_pdg_vertex_file_line(
  cs_pdg_vertex pv,
  cs_sfid * out_sfid,
  cs_line * out_line);
```

Construct a `cs_string` representation of a given `cs_pdg_vertex`.

```c
cs_pdg_vertex_characters(
  cs_pdg_vertex pv,
  cs_string out_string,
  cs_size_t capacity_bytes,
  cs_size_t * bytes_needed);
```

cs_pdg_vertex_set.h
===================

Create an empty `cs_pdg_vertex_set` of the default kind.

```c
cs_pdg_vertex_set_create_default(
  cs_pdg_vertex_set * out_set);
```

Insert a `cs_pdg_vertex` into a `cs_pdg_vertex_set`.

```c
cs_pdg_vertex_set_put(
  cs_pdg_vertex_set pdg_vertex_set,
  cs_pdg_vertex pdg_vertex);
```

Retrieve a (arbitrarily ordered) list of `cs_pdg_vertex` elements of a `cs_pdg_vertex_set`.

```c
cs_pdg_vertex_set_to_list(
  cs_const_pdg_vertex_set pdg_vertex_set,
  cs_pdg_vertex pdg_vertex[],
  cs_size_t capacity_bytes,
  cs_size_t * bytes_needed);
```

Retrieve a `cs_pdg_vertex_set` containing all of the `cs_pdg_vertices` in a list.

```c
cs_list_to_pdg_vertex_set(
  cs_pdg_vertex list[],
  cs_size_t cardinality,
  cs_pdg_vertex_set * out_set);
```

cs_source_files.h
=================

Get the absolute path name for a source file instance.

```c
cs_file_get_include_name(
  cs_sfid sfid,
  cs_file_path pname,
  cs_size_t capacity_bytes,
  cs_size_t * bytes_needed);
```

Get the source file corresponding to a specified file instance.

```c
cs_sfid_sf(
  cs_sfid sfid,
  cs_sf * sf);
```

Get a list of the cs_pdgs whose definition is at the specified source file and line number.

```c
cs_sf_line_pdgs(
  cs_sf sf,
  cs_line line,
  cs_boolean exact,
  cs_pdg pdg_list[],
  cs_size_t capacity_bytes,
  cs_size_t * bytes_needed);
```

cs_types.h
==========
