package br.com.erudio.integrationtests.vo.wrappers;

import br.com.erudio.integrationtests.vo.PersonVO;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import java.io.Serializable;
import java.util.List;

public class PersonEmbeddedVO implements Serializable {

    private static final long serialVersionUID = 1L;

    @JsonProperty("personVOList")
    private List<PersonVO> persons;

    public PersonEmbeddedVO() {
    }

    public List<PersonVO> getPersons() {
        return persons;
    }

    public void setPersons(List<PersonVO> persons) {
        this.persons = persons;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;

        if (o == null || getClass() != o.getClass()) return false;

        PersonEmbeddedVO that = (PersonEmbeddedVO) o;

        return new EqualsBuilder().append(persons, that.persons).isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37).append(persons).toHashCode();
    }
}
