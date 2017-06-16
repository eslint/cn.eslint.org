---
title: List of available rules
layout: doc
---

# Rules

Rules in ESLint are grouped by category to help you understand their purpose.

为了让你对规则有个更好的理解，ESLint 对其进行了分门别类。

No rules are enabled by default. The `"extends": "eslint:recommended"` property in a [configuration file](../user-guide/configuring#extending-configuration-files) enables rules that report common problems, which have a check mark (recommended) below.

所有的规则默认都是禁用的。在[配置文件](../user-guide/configuring#extending-configuration-files)中，使用 `"extends": "eslint:recommended"` 来启用推荐的规则，报告一些常见的问题，在下文中这些推荐的规则都带有一个(recommended)标记。

The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems (currently mostly whitespace) reported by rules which have a wrench (fixable) below.

[命令行](../user-guide/command-line-interface#fix)的 `--fix` 选项用来自动修复规则所报告的问题（目前，大部分是对空白的修复），在下文中会有一个(fixable)的图标。

{% for category in site.data.rules.categories %}

## {{ category.name}}

{{ category.description }}

{{ category.description_zh }}

<table class="rule-list table table-striped inuse-rules">
<colgroup>
<col class="recommended" />
<col class="fixable" />
<col class="name" />
<col class="description" />
</colgroup>
<tbody>
{% for rule in category.rules %}
<tr class="rule-en">
<td>{% if rule.recommended %}(recommended){% endif %}</td>
<td>{% if rule.fixable %}(fixable){% endif %}</td>
<td markdown="1">[{{rule.name}}]({{rule.name}})
</td>
<td markdown="1">{{rule.description}}
</td>
</tr>
<tr class="rule-zh">
<td>{% if rule.recommended %}(recommended){% endif %}</td>
<td>{% if rule.fixable %}(fixable){% endif %}</td>
<td markdown="1">[{{rule.name}}]({{rule.name}})
</td>
<td markdown="1">{{rule.description_zh}}
</td>
</tr>
{% endfor %}
</tbody>
</table>

{% endfor %}

{% if site.data.rules.deprecated %}
## {{ site.data.rules.deprecated.name }}

{{ site.data.rules.deprecated.description }}

<div class="rule-list deprecated-rules">
<table class="table table-striped">

<colgroup>
<col class="name" />
<col class="replaced-by" />
</colgroup>

<thead>
<tr>
<th>Deprecated rule</th>
<th>Replaced by</th>
</tr>
</thead>

<tbody>
{% for rule in site.data.rules.deprecated.rules %}
<tr>
<td markdown="1">[{{rule.name}}]({{rule.name}})
</td>
{% if rule.replacedBy.size > 0 %}
<td class="replaced-by" markdown="1">{% for replaced in rule.replacedBy %}[{{replaced}}]({{replaced}}){% endfor %}
{% else %}
<td class="replaced-by" markdown="1"><p class="text-muted">(no replacement)</p>
{% endif %}
</td>
</tr>
{% endfor %}
</tbody>

</table>
</div>
{% endif %}

## {{ site.data.rules.removed.name }}

{{ site.data.rules.removed.description }}

<div class="rule-list removed-rules">
<table class="table table-striped">

<colgroup>
<col class="name" />
<col class="replaced-by" />
</colgroup>

<thead>
<tr>
<th>Removed rule</th>
<th>Replaced by</th>
</tr>
</thead>

<tbody>
{% for rule in site.data.rules.removed.rules %}
<tr>
<td markdown="1">[{{rule.removed}}]({{rule.removed}})
</td>
<td class="replaced-by" markdown="1">{% for replaced in rule.replacedBy %}[{{replaced}}]({{replaced}}){% endfor %}
</td>
</tr>
{% endfor %}
</tbody>

</table>
</div>
