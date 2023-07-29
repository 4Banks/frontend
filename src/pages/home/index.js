import React from 'react';
import { Link } from "react-router-dom";
import finance_home from '../../assets/finance_home.jpg';
import "../../styles/global.css";
import "../../styles/home.css";
import Plot from 'react-plotly.js';



function Home() {
  var x_axis = ["Amount", "Time", "V1", "V2", "V3", "V4", "V5", "V6", "V7","V8","V9","V10","V11","V12","V13","V14","V15","V16","V17","V18","V19","V20","V21","V22","V23","V24", "V25", "V26", "V27", "V28"]
  
  var lightgbm_bsmote = {
    x: x_axis,
    y: [0.0002884108095433, 1.524122164249242e-05, 0.0, 2.2275631631363257e-05, 1.172401664795153e-06, 0.006843308517498, 0.0, 3.5172049944254266e-05, 0.0011829532797936, 0.0, 1.1724016648051447e-05, 0.0098423119760829, 0.0002426871446157, 0.0037868573773374, 0.0003552377044374, 0.0291998358637668, 4.689606659213919e-06, 3.517204994426537e-05, 0.0037118236707895, 2.3448033296125104e-06, 0.0009261973152001, 0.0, 7.034409988837531e-06, 0.0, 0.0, 5.744768157563973e-05, -1.1724016648173577e-06, 0.0013306758895597, 0.0002098598980009, 0.0],
    name: 'LightGBM',
    type: 'bar'
  };

  var lightgbm_smote = {
    x: x_axis,
    y: [0.00114309162319, 0.002243976786447, 0.0023705961662465, 0.0009555073568204, 0.0023061140746819, 0.0212146081247434, 0.0001254469781346, 0.0001535846180901, 0.0010704027199718, 0.0045817457060788, 0.0004513746409519, 0.0011161263848994, 0.0010246790550442, 0.0042382320182894, 0.0003974441643706, 0.0980538132364147, 0.0006166832756902, 0.0004279266076557, 0.0033120347030892, 0.0005428219708071, 0.0002614455712526, 0.000123102174805, 8.441291986632793e-05, 0.0001934462746936, 0.0001289641831291, 0.0005475115774663, 0.0007667506887859, 0.0011829532797936, 6.91716982237911e-05, 0.0001676534380678],
    name: 'LightGBM',
    type: 'bar'
  };

  var lightgbm_original = {
    x: x_axis,
    y: [1.170357193014393e-05, -3.277000140444741e-05, 2.1066429474259075e-05, 2.340714386028786e-05, 1.872571508823029e-05, 2.340714386028786e-05, 7.022143158086358e-06, 0.0, 1.4044286316172715e-05, 2.1066429474259075e-05, 2.340714386028786e-05, 0.0009081971817798, 0.0, 4.447357333454693e-05, 0.0, 0.0009128786105518, 9.362857544115145e-06, 0.0, 0.0, 0.0, 0.0, -1.1703571930166134e-05, 0.0, 1.170357193014393e-05, 7.958428912497872e-05, 0.0, 3.979214456248936e-05, 9.362857544115145e-06, 4.681428772057572e-06, 2.340714386028786e-05],
    name: 'LightGBM',
    type: 'bar'
  };

  var mlp_bsmote = {
    x: x_axis,
    y: [0.0007280614338472, 0.0044023682513629, 0.0103780995369013, 0.0004537194442816, 0.0048033296207281, 0.0068292396975204, 0.0035289290110792, 0.0048631221056334, 0.0011970220997714, 0.0210375754733572, 0.0065572425112844, 0.0564804502022393, 0.0035711354710124, 0.0148719151181195, 0.0019614279852277, 0.1219379799519315, 0.0037305820974266, 0.0088680461926256, 0.0019508763702444, 0.0014068819977724, 0.0143560583856029, 0.0019403247552612, 0.0011512984348438, 0.0057283545342635, 0.0016706723723548, 0.0026601793774547, 0.0058971803739961, 0.0050553959786623, 0.0009062664868984, 0.0032909314731227],
    name: 'MLP',
    type: 'bar'
  };

  var mlp_original = {
    x: x_axis,
    y: [0.0017016993586442, 1.6385000702212604e-05, 8.66064322831539e-05, 5.383643087871759e-05, 0.0002715228687795, 0.0001100135761434, 2.3407143860298963e-05, 5.851785965077516e-05, 0.0005219793080848, 2.5747858246316645e-05, -4.447357333455804e-05, -1.872571508823029e-05, 0.0004002621600112, 9.362857544124026e-05, 1.1703571930155031e-05, 0.002982070127803, 5.383643087870648e-05, 0.0004845278779083, 0.0003300407284303, 3.745143017648278e-05, 2.340714386039888e-06, 3.979214456250047e-05, -6.7880717194857e-05, 0.0001287392912316, 8.426571789712511e-05, 6.554000280885041e-05, 7.490286035300997e-05, 7.958428912504533e-05, 6.085857403680395e-05, 7.256214596695898e-05],
    name: 'MLP',
    type: 'bar'
  };

  var mlp_smote = {
    x: x_axis,
    y: [0.0074693710065068, 0.016809895070051, 0.0254211852980831, 0.0158625945248842, 0.0163796236590656, 0.0409848173984407, 0.0117193270414444, 0.0145975731285538, 0.0071575121636673, 0.0318940148895011, 0.0190386306348555, 0.0401102057564922, 0.0141426812826074, 0.0321179436074799, 0.0113500205170291, 0.1949047423647342, 0.0155026672137875, 0.0076604724778709, 0.0081247435371358, 0.0113007796471071, 0.0087848056744241, 0.0073908200949645, 0.0116384313265725, 0.0104226508001641, 0.009687554956328, 0.0129878656427692, 0.0165097602438596, 0.0122609766105868, 0.0057646989858726, 0.011827187994607],
    name: 'MLP',
    type: 'bar'
  };

  var random_forest_bsmote = {
    x: x_axis,
    y: [0.0001571018230846, 4.220645993314731e-05, 2.4620434961020172e-05, 0.0008769564452781, 5.393047658125427e-05, 0.0107520956679758, 3.98616566035237e-05, 3.634445160910493e-05, 1.641362330733198e-05, 0.0, 2.462043496100908e-05, 0.00751157746644, 0.0003470308927838, 0.0400023448033296, 0.0002379975379565, 0.0100005862008323, 6.0964886570136215e-05, 6.917169822382441e-05, 0.0002743419895656, 3.517204994429868e-05, 0.000568614807433, 0.0, -1.1724016648062552e-06, 0.0, 0.0, 1.1724016648062552e-05, 0.0, 1.406881997771947e-05, 3.0482443285073657e-05, -4.689606659225021e-06],
    name: 'Random Forest',
    type: 'bar'
  };

  var random_forest_original = {
    x: x_axis,
    y: [-2.3407143860065816e-06, 0.0, -3.511071579043179e-05, 2.1066429474358998e-05, 3.511071579053171e-05, 0.0001029914329853, 1.404428631623933e-05, 0.0, 1.6385000702279218e-05, 1.170357193019944e-05, 0.0, 0.0001638500070222, 2.340714386039888e-05, 0.0001802350077244, 1.6385000702279218e-05, 0.0004447357333459, 0.0, 4.4473573334657954e-05, 9.362857544126246e-05, 2.1066429474358998e-05, 0.0, -1.872571508823029e-05, -1.872571508823029e-05, -1.63850007022015e-05, 0.0, -4.681428772046469e-06, 0.0, 1.87257150882969e-05, -4.681428772057572e-06, 0.0],
    name: 'Random Forest',
    type: 'bar'
  }; 

  var random_forest_smote = {
    x: x_axis,
    y: [0.0003552377044374, 0.0015088809426108, 0.0006588897356233, 0.0003106864411746, 0.0014256404244093, 0.0187091857670437, 0.0002215839146491, 0.0001981358813529, 0.0003857201477225, 0.0012955038396154, 0.0002825488012192, 0.0013846063661409, 0.0011770912714695, 0.0056075971627879, 0.0005135119291868, 0.0246661586259451, 0.0002637903745822, 0.0002942728178673, 0.0009215077085409, 0.0002731695879007, 0.0004044785743595, 0.0002227563163139, 0.0003118588428395, 0.0001406881997772, 0.0002673075795767, 0.000196963479688, 0.0002321355296324, 0.0002309631279675, 7.855091154225224e-05, 0.0002133771029954],
    name: 'Random Forest',
    type: 'bar'
  }; 

  var reg_log_bsmote = {
    x: x_axis,
    y: [0.0018922562870039, -2.5792836625804228e-05, 0.0101787912538836, 0.0002204115129843, 0.0073685444633331, 0.1746561932117943, 0.0655747699161733, 0.0041784395333841, 0.0101283779822967, 0.0134134474470953, 0.0001676534380679, 0.2937253062899349, 0.005050706372003, 0.0485831525880766, 0.000562752799109, 0.0035441702327217, 0.0011595052464974, 0.0001125505598218, 0.009050940852336, 0.000234480332962, 0.0082220528753151, -4.689606659225021e-06, 0.0136807550266721, 0.0001864118647048, 0.0024339058561463, 1.1724016648395618e-06, 0.0002954452195322, 0.0001922738730289, 0.0116712585731872, 5.158567325165286e-05],
    name: 'Regressão Logística',
    type: 'bar'
  }; 

  var reg_log_original = {
    x: x_axis,
    y:[0.0, 0.0, 0.0, 0.0, 0.0, 0.0001381021487758, 1.872571508823029e-05, 0.0, 0.0, 4.681428772057572e-06, 4.213285894856256e-05, 0.0002013014371986, 0.0001006507185993, 0.000154487149478, 0.0, 0.0007022143158091, 0.0, 7.256214596700339e-05, 7.02214315809746e-05, 0.0, 0.0, 0.0, 4.681428772057572e-06, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    name: 'Regressão Logística',
    type: 'bar'
  };
  
  var reg_log_smote = {
    x: x_axis,
    y: [0.0366527932469663, 0.0007737850987748, 0.0248725013189518, 0.0997420716337417, 0.0110756785274634, 0.0692232838970631, 0.0256087695644527, 0.0137299958965941, 0.1266193797995193, 0.0128647634679641, 0.0123371827187994, 0.1195415909490591, 0.053470895128671, 0.1833202415147429, 0.0012943314379506, 0.2343818512222287, 0.0001277917814643, 0.0820446685034292, 0.1687871504777536, 0.0162858315258807, 0.0027985227739023, 0.0072477870918576, -3.048244328508476e-05, 0.0041034058268362, 0.0076686792895245, -1.1102230246251566e-17, -8.206811653674873e-05, -5.393047658129869e-05, 0.000327100064482, 0.0011524708365085],
    name: 'Regressão Logística',
    type: 'bar'
  };
  
  var xgboost_bsmote = {
    x: x_axis,
    y: [0.0004033061726947, 4.806846825720079e-05, -2.3448033296569195e-06, 7.034409988859735e-06, -1.4068819977752776e-05, 0.0062922797350371, 2.344803329623613e-05, 0.0001113781581569, 6.565449322936124e-05, 2.1103229966568104e-05, 2.3448033296014083e-06, 0.0103710651269124, 0.0001406881997772, 0.0032370009965413, 0.0005369599624831, 0.020735095843836, 2.1103229966579207e-05, 8.324051820151057e-05, 0.0024350782578111, 2.3448033296125104e-06, 0.0018899114836742, 4.689606659225021e-06, -8.206811653721502e-06, -8.2068116537104e-06, 9.84817398440474e-05, 1.758602497214934e-05, -4.689606659258328e-06, 3.634445160911603e-05, 8.910252652556405e-05, 2.4620434960997973e-05],
    name: 'XGBoost',
    type: 'bar'
  };

  var xgboost_original = {
    x: x_axis,
    y: [1.638500070223481e-05, 4.681428772068674e-06, 0.0, 0.0, 0.0, 7.02214315809635e-05, 2.340714386028786e-06, 9.362857544115145e-06, 3.745143017650498e-05, -7.022143158086358e-06, 0.0, 0.0001802350077244, 0.0, -1.872571508823029e-05, 0.0, 0.0011258836196807, 9.362857544115145e-06, 2.340714386028786e-05, 4.681428772068674e-05, 0.0, -1.63850007022015e-05, -2.340714386028786e-05, -2.1066429474259075e-05, 1.4044286316172715e-05, 0.0, 4.681428772057572e-06, 0.0, -1.4044286316161614e-05, 2.1066429474259075e-05, 0.0],
    name: 'XGBoost',
    type: 'bar'
  };

  var xgboost_smote = {
    x: x_axis,
    y: [0.0015041913359517, 0.0016085350841198, 0.0015381909842312, 0.0008441291986634, 0.003127967641714, 0.0239322351837739, 0.0003341344744709, 0.0006706137522715, 0.0008230259686969, 0.0049639486488071, 0.0005416495691424, 0.0015815698458292, 0.0014643296793481, 0.0070801336537898, 0.0006823377689196, 0.0789624245266428, 0.0006225452840143, 0.0004642710592649, 0.0044656779412627, 0.0008628876253004, 0.0004314438126502, 0.0002051702913418, 0.0002403423412861, 0.0007843367137581, 0.0002485491529398, 0.0003786857377337, 0.0008699220352893, 0.001613224690779, 0.0002684799812415, 0.000407995779354],
    name: 'XGBoost',
    type: 'bar'
  };

  var decision_tree_bsmote = {
    x: x_axis,
    y: [0.000196963479688, 0.0088856322175977, -3.5172049944853788e-06, 0.0, 0.0179142974383023, 0.0156269417902572, 0.0002684799812415, 0.000852336010317, 0.002453836684448, 0.0, 0.0009543349551555, 0.0362319010492994, 0.0246661586259452, 0.1690497684506711, 0.001458467671024, 0.057607128202122, 0.0, 0.0005170291341813, 0.0288715633976199, 0.0003857201477225, 0.0004150301893428, 1.4068819977675062e-05, 0.0003317896711412, 0.0, 0.0007128202122046, 0.0, 0.0, 0.02407995779354, 0.0, 0.0],
    name: 'Árvore de decisão',
    type: 'bar'
  };

  var decision_tree_original = {
    x: x_axis,
    y: [4.681428772057572e-06, -3.745143017648278e-05, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.1066429474270178e-05, 0.0, 0.0, 0.0004564393052759, 0.0, 0.0002972707270259, 0.0, 0.0002527971536913, 0.0, 0.0, 0.0009479893263424, 2.340714386028786e-05, -4.681428772057572e-06, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    name: 'Árvore de decisão',
    type: 'bar'
  };

  var decision_tree_smote = {
    x: x_axis,
    y: [0.0051796705551322, 0.0045348496394865, 0.0051585673251656, 0.0060765578287121, 0.0052160120067413, 0.0437540301307228, 0.0016378451257401, 0.0025710768509291, 0.0047833987924263, 0.006670965472771, 0.0045817457060789, 0.0126279383316724, 0.0035418254293921, 0.028574945776423, 0.0051104988569084, 0.2133583445688493, 0.0015241221642535, 0.0038419602555836, 0.0061445571252711, 0.006200832405182, 0.0010504718916701, 0.0024186646345038, 0.0056240107860953, 0.0005568907907849, 0.0033178967114133, 0.0020481857084237, 0.0028770736854446, 0.008982941555777, 0.0037411337124099, 0.0023096312796764],
    name: 'Árvore de decisão',
    type: 'bar'
  };

  const data_smote = [decision_tree_smote, xgboost_smote, random_forest_smote, reg_log_smote, lightgbm_smote, mlp_smote];
  const data_bsmote = [decision_tree_bsmote, xgboost_bsmote, random_forest_bsmote, reg_log_bsmote, lightgbm_bsmote, mlp_bsmote];
  const data_original = [decision_tree_original, xgboost_original, random_forest_original, reg_log_original, lightgbm_original, mlp_original];
  




























  return (
    <div>
      <div className="home">
      <div className="home_intro">
        <div className="home_intro_info">
        <h1 className="title_home">4banks</h1>
        <p className='home_intro_info_text'>Descubra um mundo de possibilidades com o 4banks, nossa plataforma de análise de dados voltada para cientistas de dados do time de análise e detecção de fraudes em instituições financeiras. Com nossas ferramentas, você poderá explorar seus dados de transações bancárias de cartão de crédito e obter análises detalhadas, desde insights de alto nível até informações específicas. Nossa metodologia avançada facilita a tomada de decisões estratégicas, permitindo que você identifique padrões suspeitos e detecte atividades fraudulentas com precisão. Experimente agora e transforme seus dados em insights valiosos para proteger seus clientes e impulsionar a segurança financeira da sua instituição.</p>
        <Link to="/analise" className='home_intro_info_button'>
              Nova análise
            </Link>
        </div>
        <div className="home_intro_info_image_container">
        <img src={finance_home} alt="finance_home" className='home_intro_info_image'/>
        </div>
        </div>
        <div className="home_data_analysis">
          <p className='home_data_analysis_title'>Análise do dataset Credit Card Fraud Detection</p>
          <p>No campo de análise de dados, um outlier é uma observação que se distancia muito dos demais dados, de forma a levantar suspeitas de que foi gerado por um mecanismo diferente. Os outliers podem ser causados por variabilidade nos dados ou por erros de medição. É importante investigá-los, pois podem indicar problemas nos dados e podem levar a interpretações enganosas e a conclusões erradas. Em conjuntos de dados de transações com cartão de crédito, outliers podem ser indicativos de atividades fraudulentas.</p>
          <br/>
          <p>Normalmente, em um padrão de gastos habitual, as transações ocorrem dentro de um certo intervalo de valores e em certos tipos de estabelecimentos. No entanto, uma transação fraudulenta - como compras exorbitantes ou gastos em locais incomuns - pode se destacar drasticamente do padrão de gastos regular, aparecendo como um outlier.</p>
          <br/>
          <p>Em termos mais técnicos, se considerarmos características como o valor da transação, a localização, a hora do dia, entre outras, um registro de transação legítima provavelmente estará dentro de um "intervalo normal" para a maioria dessas características. Por outro lado, uma transação fraudulenta pode se desviar significativamente desse intervalo normal em uma ou mais dessas características.</p>
          <br/>
          <p>Portanto, identificar e analisar outliers pode ser uma estratégia eficaz para detectar transações suspeitas e possivelmente fraudulentas. Por exemplo, um valor de transação que é excepcionalmente alto em comparação com o padrão de gastos de um cliente pode ser um sinal de fraude.</p>
          <br/>
          <p>Para fazer essa análise, utilizamos quatro métodos de detecção de outliers: Z-score, Robust Z-score, IQR (Interquartile Range) e Winsorization.</p>
          <br/>
          <p><b>Z-score:</b> Esta técnica considera outliers as observações que estão a mais de três desvios-padrão da média. O Z-score é calculado subtraindo-se a média de cada valor e dividindo-se pelo desvio padrão.</p>
          <br/>
          <p><b>Robust Z-score:</b> Este método é uma versão do Z-score mais resistente à presença de outliers. Ele usa a mediana e a Mediana do Desvio Absoluto (MAD, do inglês Median Absolute Deviation) em vez da média e do desvio padrão.</p>
          <br/>
          <p><b>IQR:</b> O IQR é a diferença entre o terceiro quartil (Q3) e o primeiro quartil (Q1). Os pontos de dados que caem abaixo de Q1 - 1,5IQR ou acima de Q3 + 1,5IQR são considerados outliers.</p>
          <br/>
          <p><b>Winsorization:</b> Este método "recorta" os extremos do conjunto de dados, substituindo os valores que caem abaixo do percentil de 1% ou acima do percentil de 99% pelos próprios percentis de 1% e 99%, respectivamente.</p>
          <br/>
          <p>Após a detecção dos outliers, é calculada a porcentagem de transações fraudulentas que cada método conseguiu detectar. Em seguida, essas porcentagens são ordenadas e visualizadas em um gráfico de barras.</p>
          <br/>
          <p>O gráfico resultante exibe a porcentagem de fraudes detectadas por cada método para cada atributo. Isso pode ser útil para entender quais atributos têm maior probabilidade de sinalizar uma fraude quando apresentam outliers e quais métodos são mais efetivos na detecção dessas fraudes.</p>
          <br/>
          <div className="home_data_analysis_bsmote">
          <Plot
          className='line_chart_graph'
          data={data_bsmote}
          layout={{ barmode:"relative",width: 1200, height: 800, title: "Importância das Features BSmote", responsive: true, scrollZoom: true}}
          />
          </div>
          <br/>
          <p>Analisando o gráfico, é possível observar que os outliers associados ao atributo 'V11' estão fortemente ligados a transações fraudulentas. A ênfase recai sobre o valor de aproximadamente 72.8% dos outliers detectados pelo método Robust Z-Score que são fraudes, seguido de 42.4% para Z-Score e 37.7% para IQR. Isso sugere que os valores do atributo 'V11' que desviam significativamente da norma têm alta probabilidade de indicar uma transação fraudulenta.</p>
          <br/>
          <p>Outros atributos também revelam uma presença considerável de outliers que indicam atividade fraudulenta. Por exemplo, os atributos 'V18', 'V17', 'V3' e 'V16' apresentam porcentagens de fraude entre outliers de 14,8%, 14,6%, 14,3% e 14,1%, respectivamente. Portanto, mesmo que o atributo 'V11' se destaque, é crucial também prestar atenção a esses outros atributos ao analisar possíveis fraudes.</p>
          <br/>
          <p>Além disso, podemos visualizar a matriz de correlação, que é a matriz que calcula o quanto cada atrituto tem relação com outro. Por exemplo, o atributo V11 é positivamente correlacionado, ou seja, quanto maior o valor de V11 maior é a probabilidade da classe da transação ser fraudulenta.</p>
          <br/>
          <p>Matriz de Correlação</p>
          <br/>
          <p>Algumas features que são positivamente correlacionadas são V11, V4 e V2. Enquanto negativamente relacionadas temos V17, V14, V12 e V10.</p>
          <br/>
          <p>Ao analisar uma trasação com modelos de machine learning. podemos usar essas correlações para justificar a decisão do modelo e entender melhor como cada aspecto impacta no modelo.</p>
          <br/>
          <p className='home_data_analysis_subtitle'>Modelos de ML</p>
          <br/>
          <p>Após a fase de treinamento dos modelos de Machine Learning, a avaliação da importância de cada atributo foi efetuada por meio da técnica "Permutation Importance". Esta técnica envolve a aleatorização dos valores de cada atributo de forma independente, seguida da avaliação do impacto resultante na performance do modelo. Assim, a metodologia proporciona uma medida quantitativa do aumento no erro de previsão que ocorre quando a informação fornecida por um dado atributo é removida. Em outras palavras, a técnica busca responder à pergunta: "Qual a degradação no desempenho do modelo quando as informações de um determinado atributo são excluídas?".</p>
          <br/>
          <p>Gráfico de Importância de Atributos</p>
          <br/>
          <p>A análise das importâncias obtidas revela que os atributos 'V10' e 'V14' destacam-se em relação aos demais. Este resultado sugere que a remoção desses atributos pode comprometer significativamente a capacidade do modelo de identificar fraudes.</p>
          </div>
          <Plot
          className='line_chart_graph'
          data={data_smote}
          layout={{ barmode:"relative",width: 1200, height: 800, title: "Importância das Features Smote", responsive: true, scrollZoom: true}}
          />

        <Plot
          className='line_chart_graph'
          data={data_original}
          layout={{ barmode:"relative" ,width: 1200, height: 800, title: "Importância das Features Original", responsive: true, scrollZoom: true}}
          />

          
      </div>
    </div>
  );
}

export default Home;
