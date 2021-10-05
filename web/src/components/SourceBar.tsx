import styled from "styled-components";
import SymbolIcon from "./SymbolIcon";
import numeral from 'numeral';

const Container = styled.div`
  padding-top: 0.3em;

  .source {
    display: flex;
    justify-content: flex-end;

    .source-name {
      width: -webkit-fill-available;
      text-align: right;
      padding-left: 0.3em;
      padding-right: 0.3em;
    }
  }
`

interface SourceBarProps {
  sources: ISource[]
}

interface ISource {
  name: string
  value: number
}

const SourceBar: React.FC<SourceBarProps & React.HTMLAttributes<HTMLDivElement>>
  = (props: { sources: ISource[] }) => {
    const { sources } = props
    return <Container >
      {sources.map((source, i) => {
        const symbols = source.name.split('-')
        return (
          <div key={i} className="source">
            <span className="token-value">{numeral(source.value).format('($0.00a)')}</span>
            <span className="source-name">{source.name}</span>
            <span className="symbol-icon">
              {symbols[0].startsWith('ib') ? <SymbolIcon symbol={`ib-${symbols[0].slice(2)}`} /> : <>
                <SymbolIcon symbol={symbols[0]} />
                <SymbolIcon symbol={symbols[1]} />
              </>}
            </span>
          </div>
        );
      })
      }</Container>
  }

export default SourceBar;