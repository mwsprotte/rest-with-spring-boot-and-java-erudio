package br.com.erudio.integrationtests.vo.wrappers;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.xml.bind.annotation.XmlRootElement;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import java.io.Serializable;

@XmlRootElement
public class WrapperPersonVO  implements Serializable {

    private static final long serialVersionUID = 1L;

    @JsonProperty("_embedded")
    private PersonEmbeddedVO embedded;

    public WrapperPersonVO() {}

    public PersonEmbeddedVO getEmbedded() {
        return embedded;
    }

    public void setEmbedded(PersonEmbeddedVO embedded) {
        this.embedded = embedded;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;

        if (o == null || getClass() != o.getClass()) return false;

        WrapperPersonVO that = (WrapperPersonVO) o;

        return new EqualsBuilder().append(embedded, that.embedded).isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37).append(embedded).toHashCode();
    }
}

